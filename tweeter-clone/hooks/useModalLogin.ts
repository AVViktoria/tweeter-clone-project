// Хук на открытие и закрытие Login Modal 

import { create } from 'zustand';


interface LoginModalStore{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalLogin = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useModalLogin;