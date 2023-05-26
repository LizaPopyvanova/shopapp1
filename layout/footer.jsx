function Footer() {
    return (
        <footer className="page-footer orange">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;Liza Popyvanova
                    <a className="grey-text text-lighten-4 right" href="https://github.com/catlabs1/shop_react_app">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
