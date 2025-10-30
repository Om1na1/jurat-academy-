import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error("ErrorBoundary:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background:"#fee2e2", color:"#7f1d1d", padding:12, borderRadius:12 }}>
          <b>Ошибка модуля:</b> {String(this.state.error?.message || this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}
