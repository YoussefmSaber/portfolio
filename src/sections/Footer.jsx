const Footer = () => {
    return (
        <section className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between flex-wrap gap-5"}>
            <div></div>
            <div className={"flex gap-3"}>
                <div className={"social-icon"}>
                    <a href={"https://github.com/youssefmsaber"} target={"_blank"} rel={"noreferrer"} className={"flex justify-center items-center"}>
                        <img src={"/assets/github.svg"} alt={"github"} className={"w-1/2 h-1/2"}/>
                    </a>
                </div>
                <div className={"social-icon"}>
                <a href={"https://linkedin.com/in/youssefmsaber"} target={"_blank"} rel={"noreferrer"} className={"flex justify-center items-center"}>
                    <img src={"/assets/linkedin.svg"} alt={"linkedin"} className={"w-1/2 h-1/2"}/>
                </a>
                </div>
            </div>
        </section>
    )
}
export default Footer
