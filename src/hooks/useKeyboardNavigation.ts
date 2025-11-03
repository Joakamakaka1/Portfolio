import { useEffect } from "react";

type KeyboardAction = "confirm" | "cancel" | "up" | "down" | "left" | "right";

type KeyboardHandlers = {
  onConfirm?: () => void;
  onCancel?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
};

type UseKeyboardNavigationOptions = {
  handlers: KeyboardHandlers;
  enabled?: boolean;
  preventDefault?: boolean;
};

/**
 * Hook personalizado para manejar la navegación con teclado
 * @param handlers - Objeto con los handlers para cada acción
 * @param enabled - Si está habilitado o no
 * @param preventDefault - Si debe prevenir el comportamiento por defecto
 */
export const useKeyboardNavigation = ({
  handlers,
  enabled = true,
  preventDefault = true,
}: UseKeyboardNavigationOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // Mapeo de teclas a acciones
      const keyMap: Record<string, KeyboardAction> = {
        a: "confirm",
        x: "cancel",
        arrowup: "up",
        arrowdown: "down",
        arrowleft: "left",
        arrowright: "right",
      };

      const action = keyMap[key];

      if (!action) return;

      if (preventDefault) {
        e.preventDefault();
      }

      // Ejecutar el handler correspondiente
      switch (action) {
        case "confirm":
          handlers.onConfirm?.();
          break;
        case "cancel":
          handlers.onCancel?.();
          break;
        case "up":
          handlers.onUp?.();
          break;
        case "down":
          handlers.onDown?.();
          break;
        case "left":
          handlers.onLeft?.();
          break;
        case "right":
          handlers.onRight?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers, enabled, preventDefault]);
};

// Hook específico para navegación en listas/grids
type UseListNavigationOptions = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  itemCount: number;
  columns?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
  enabled?: boolean;
};

export const useListNavigation = ({
  setSelectedIndex,
  itemCount,
  columns = 1,
  onConfirm,
  onCancel,
  enabled = true,
}: UseListNavigationOptions) => {
  const rowCount = Math.ceil(itemCount / columns);

  useKeyboardNavigation({
    enabled,
    handlers: {
      onConfirm,
      onCancel,
      onUp: () => {
        setSelectedIndex((prev) => {
          if (prev === 0) return itemCount - 1;
          return prev - 1;
        });
      },
      onDown: () => {
        setSelectedIndex((prev) => {
          if (prev === itemCount - 1) return 0;
          return prev + 1;
        });
      },
      onLeft: () => {
        if (columns === 1) return;

        setSelectedIndex((prev) => {
          const currentCol = prev % columns;
          const currentRow = Math.floor(prev / columns);

          if (currentCol > 0) {
            // Moverse a la izquierda en la misma fila
            return prev - 1;
          } else {
            // Saltar a la última columna de la fila anterior
            const prevRow = currentRow === 0 ? rowCount - 1 : currentRow - 1;
            const lastColInPrevRow = Math.min(
              columns - 1,
              itemCount - prevRow * columns - 1
            );
            return prevRow * columns + lastColInPrevRow;
          }
        });
      },
      onRight: () => {
        if (columns === 1) return;

        setSelectedIndex((prev) => {
          const currentCol = prev % columns;
          const currentRow = Math.floor(prev / columns);
          const itemsInCurrentRow = Math.min(
            columns,
            itemCount - currentRow * columns
          );

          if (currentCol < itemsInCurrentRow - 1) {
            // Moverse a la derecha en la misma fila
            return prev + 1;
          } else {
            // Saltar a la primera columna de la siguiente fila
            const nextRow = (currentRow + 1) % rowCount;
            return nextRow * columns;
          }
        });
      },
    },
  });
};

// Hook específico para modales simples
type UseModalNavigationOptions = {
  onConfirm?: () => void;
  onCancel: () => void;
  enabled?: boolean;
};

export const useModalNavigation = ({
  onConfirm,
  onCancel,
  enabled = true,
}: UseModalNavigationOptions) => {
  useKeyboardNavigation({
    enabled,
    handlers: {
      onConfirm,
      onCancel,
    },
  });
};
