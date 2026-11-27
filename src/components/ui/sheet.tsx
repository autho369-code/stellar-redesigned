import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Slide-in panel (shadcn/ui "sheet", Radix Dialog underneath). Colors come
 * from the R1 tokens; the slide is switched off for reduced motion.
 */
export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { closeLabel?: string }
>(({ className, children, closeLabel = 'Close menu', ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="sheet-overlay fixed inset-0 z-[60] bg-ink/50" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'sheet-panel fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-paper shadow-glass focus:outline-none',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute right-3 top-1.5 flex h-12 w-12 items-center justify-center text-ink hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600"
        aria-label={closeLabel}
      >
        <X className="h-6 w-6" aria-hidden />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = 'SheetContent';
