
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundaty/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of out comics"
                />
                <title>Comics page</title>
            </Helmet>
            <ErrorBoundary>
                <AppBanner />
            </ErrorBoundary>
            <ErrorBoundary>
                <ComicsList />
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;