import Link from 'next/link'
import styles from './button.module.sass';

export const IconType = {
    ARROW_RIGHT: 'ARROW_RIGHT',
}

const Button = (props) => {
    if (props.href) {
        return (
            <Link className={styles.button} href={props.href}>
                {props.children}
                <Button.Icon iconType={props.icon} />
            </Link>
        );
    }
    return <button className={styles.button}>{props.children}</button>;
};


Button.Icon = ({ iconType }) => {
    if (iconType === 'ARROW_RIGHT') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0"/></svg>
        );
    }

    return null;
};

Button.Icon.displayName = 'Icon';

export default Button;