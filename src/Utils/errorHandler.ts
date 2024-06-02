export function handleError(error: unknown, setErrorMessage: (message: string) => void) {
    if (error instanceof Error) {
        const {response} = error as {
            response?: {
                data: { message?: string, status?: string, timestamp?: string } | Array<{
                    message: string,
                    status: string,
                    timestamp: string
                }>
            }
        };
        if (response?.data && !Array.isArray(response.data) && response.data.message) {
            setErrorMessage(response.data.message);
        } else if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
            setErrorMessage(response.data[0].message);
        } else {
            setErrorMessage('Something went wrong.');
        }
    } else {
        setErrorMessage('Something went wrong.');
    }
}