import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer id="footer" className="footer items-center gap-3 lg:gap-4 p-4 border-t">
            <div className="items-center grid-flow-col">
                <p >Copyright © 2023 - All rights reserved by Mokhlesur-Rahman</p>
            </div>
            <div className="grid-flow-col text-2xl gap-4 md:place-self-center md:justify-self-end">
                <a target="_blank" rel="noreferrer" href="#"><Icon icon="fa-brands:linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="#"><Icon icon="fa-brands:telegram" /></a>
                <a target="_blank" rel="noreferrer" href="#"><Icon icon="fa-brands:facebook-square" /></a>
            </div>
        </footer>
    );
};

export default Footer;