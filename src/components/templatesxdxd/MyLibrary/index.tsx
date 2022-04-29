import { makeStyles } from "@mui/styles";

export interface MyLibraryProps {
    header: React.ReactNode;
    footer: React.ReactNode,
    body: React.ReactNode;
}

let useStyles = makeStyles({
    test: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export const MyLibrary = (props: MyLibraryProps) => {
    let {header, footer, body} = props
    let styles = useStyles()
    return (
        <div className={styles.test}>
            {header}
            {body}
            {footer}
        </div>
    )
}