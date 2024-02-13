import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { IconContext } from "react-icons";

export function ErrorCard() {
  return (
    <CardWrapper
      title="Error"
      headerLabel="Ooops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className=" w-full flex direction-reverse justify-center">
        <ExclamationTriangleIcon className="text-destructive w-7 h-7" />
      </div>
    </CardWrapper>
  );
}
