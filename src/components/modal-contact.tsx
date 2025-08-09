"use client";

interface ModalContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContact: React.FC<ModalContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-3 right-3 bg-white max-w-md w-full z-50">
      <div className="bg-blue-400 p-3 flex justify-between">
        <div className="text-black font-semibold">Find Me On</div>
        <div onClick={onClose} className="text-black cursor-pointer">Close</div>
      </div>
      <div className="p-3 text-black">
        <div>asdfads</div>
        <div>asdfads</div>
        <div>asdfads</div>
      </div>
    </div>
  );
};

export default ModalContact;
