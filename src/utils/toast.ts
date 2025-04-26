import { toast } from 'react-hot-toast';

export const showLoadingToast = (message: string) => {
  return toast.loading(message, {
    style: {
      background: 'rgba(17, 17, 17, 0.9)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  });
};

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      background: 'rgba(17, 17, 17, 0.9)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    icon: '🎉',
  });
};

export const showProcessingSteps = async (steps: string[], finalMessage: string) => {
  const toastId = showLoadingToast('Initializing...');
  
  for (const step of steps) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
    toast.loading(step, { id: toastId });
  }
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  toast.dismiss(toastId);
  showSuccessToast(finalMessage);
}; 