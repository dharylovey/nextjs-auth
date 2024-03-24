import { CardWrapper } from "@/components/auth/card-wrapper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"



export const Errocard = () => {
    return (
        <CardWrapper 
            headerLabel='Opps! something went wrong'
            backButtonHref='/auth/login'
            backButtonLabel= 'Back to login'
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive h5 w-5 text-6xl"/>
            </div>
        </CardWrapper>

    )
}