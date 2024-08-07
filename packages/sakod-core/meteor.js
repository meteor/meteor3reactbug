import { toast, Toaster } from 'sonner/dist/index.mjs';

window.toast = toast;

Template.skEditor.helpers({
  Toaster() { return Toaster; },
});
