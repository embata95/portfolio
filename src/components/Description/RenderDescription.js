import React from "react";
import ContentLoader from 'react-content-loader'


function RenderDescription({ data, descrIsLoading }) {
    const page_descr = <>
        <h3 align="center" className="section_header">About me</h3>
    </>;
    if (descrIsLoading) {
        return (
            <>
                {page_descr}
                <ContentLoader
                    speed={2}
                    width="100%"
                    height={160}
                    backgroundColor="#d9d9d9"
                    foregroundColor="#ededed">
                    <rect x="0" y="0" rx="4" ry="4" width="98%" height="38" />
                    <rect x="0" y="50" rx="4" ry="4" width="98%" height="38" />
                    <rect x="0" y="100" rx="4" ry="4" width="98%" height="38" />
                </ContentLoader>
            </>
        )
    }
    descrIsLoading = false
    const style = {
        'lineHeight': '180%'
    };
    const page_content = data.map((obj) =>
        <div
            key={data.indexOf(obj)}
            className="title_text"
            style={style}
            dangerouslySetInnerHTML={{__html : obj.description}} />
    );

    return (
        <>
            {page_descr}
            {page_content}
        </>
    )
}

export default RenderDescription