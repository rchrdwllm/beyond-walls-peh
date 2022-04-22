import type { ReactNode } from "react";

import styles from "./Link.module.scss";

import LinkComponent from "next/link";

interface LinkProps {
    className?: string;
    children?: ReactNode;
    href?: string;
    lowercase?: boolean;
}

const Link = ({ className, children, href, lowercase }: LinkProps) => {
    return (
        <span
            className={`${styles.link} ${className} ${
                lowercase ? styles.lowercase : ""
            }`}
        >
            <LinkComponent href={href ?? "/"}>{children}</LinkComponent>
        </span>
    );
};

export default Link;
