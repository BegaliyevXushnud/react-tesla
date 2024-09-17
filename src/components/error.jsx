// components/error.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Qandaydir xatolik yuzaga kelganida state ni yangilaydi
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Xatolikni konsolga chiqarish
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Foydalanuvchiga xatolik yuzaga kelganligini ko'rsatadi
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; // ErrorBoundary o'ralgan komponentlarni render qiladi
  }
}

export default ErrorBoundary;
