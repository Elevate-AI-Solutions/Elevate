'use client'
import ContactModal from "@/components/ContactUsModal";
import { createContext, useContext, useState } from "react";

const ContactModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal open={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
