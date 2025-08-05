

function ErrorFallback ({error, resetErrorBoundary}) {
        return(
            <div>
                <div>
                    <h1>Something went wrong</h1>
                    <pre>{error.message}</pre>
                    <button type={"primary"} onClick={resetErrorBoundary}>Try Again</button>
                </div>
            </div>
        );
}

export default ErrorFallback;