import styles from "./Image.module.scss";

import ImageComponent from "next/image";

interface ImageProps {
    src: string;
    height?: number;
    width?: number;
    className?: string;
    priority?: boolean;
    scrollSpeed?: number;
}

const Image = ({
    src,
    height = 100,
    width = 100,
    className,
    priority = false,
    scrollSpeed = 0,
}: ImageProps) => {
    return (
        <div
            data-scroll
            data-scroll-speed={scrollSpeed}
            className={`${styles.image} ${className}`}
        >
            <ImageComponent
                src={src}
                height={height}
                width={width}
                layout="responsive"
                priority={priority}
            />
        </div>
    );
};

export default Image;
