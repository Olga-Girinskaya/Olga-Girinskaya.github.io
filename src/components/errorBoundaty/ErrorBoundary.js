
import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

   
    // // 1 вариант - Этот метод возвращает ТОЛЬКО статус ошибки
    // static getDerivedStateFromError(error) {
    //     return{error: true}
    // }

    // 2 вариант
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true // устанавливаем в тру
        })
    }

    render () {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return this.props.children; // компонент,который был передан во внутрь этого компонента
    }

}

export default ErrorBoundary;