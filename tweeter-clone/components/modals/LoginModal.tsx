import { useCallback, useState } from "react";
import useModalLogin from "@/hooks/useModalLogin";
import Input from "../Input";
import Modal from "../Modal";


const LoginModal = () => {
  const loginModal = useModalLogin();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
    const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO and log in

      loginModal.onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading} 
      />
    </div>
  )
  

  return (
    <Modal
     disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      // footer={footerContent}
    />
  )
}

export default LoginModal;