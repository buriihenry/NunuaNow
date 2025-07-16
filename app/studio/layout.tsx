import { Metadata } from "next";


export const metadata: Metadata = {
  title: "NunuaNow",
  description: "E-commerce Website",
};


const RootLayout = ({children}:{children:React.
    ReactNode}) =>{
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;