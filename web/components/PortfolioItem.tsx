const PortFolioItem = ({ title, client, description, frameworks, languages, imgUrl, link }: { title? : any, client? : any, description? : any, frameworks? : any, languages? : any, imgUrl? : any, link? : any }) => (
    <div className="portfolioItem">
        <h2>
            {title} (for {client}{link && <span><span> -</span><a className="link" href={link}>link</a></span>})
        </h2>
        {imgUrl && <img src={imgUrl} />}
        <p>{description}</p>
        <p>
            { frameworks && 
            <span style={{ marginRight: "20px"}}>
                    <b>Frameworks/tools: </b> 
                    <span>{frameworks}</span>
                </span>
            }
            { languages && 
                <span>
                    <b>Languages: </b> 
                    <span>{languages}</span>
                </span>
            }
        </p>
        <style jsx global>{`
            .portfolioItem {
                #background: #EEE;
                border-top: 1px #EEE solid;
                padding-top: 25px;
                padding-bottom: 0px;
                margin-bottom: 10px;
            }
            .portfolioItem:first-of-type {
                border: none;
                padding-top: 0px;
            }
            .link {
                margin-left: 5px;
            }
        `}</style>
    </div>
)

export default PortFolioItem