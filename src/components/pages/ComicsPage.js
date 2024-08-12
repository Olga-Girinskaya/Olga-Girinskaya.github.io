
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundaty/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <>
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