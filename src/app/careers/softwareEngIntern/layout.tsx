import RootLayout from "app/layout" 

export const metadata = {
	title: "Software Engineering Intern | AuroByte",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}