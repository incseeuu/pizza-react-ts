import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#e4e2e2"
        foregroundColor="#ffffff"
    >
        <circle cx="140" cy="132" r="125" />
        <rect x="0" y="270" rx="5" ry="5" width="273" height="45" />
        <rect x="0" y="338" rx="5" ry="5" width="274" height="75" />
        <rect x="0" y="440" rx="5" ry="5" width="134" height="40" />
        <rect x="153" y="440" rx="19" ry="25" width="121" height="45" />
    </ContentLoader>
)

export default Skeleton