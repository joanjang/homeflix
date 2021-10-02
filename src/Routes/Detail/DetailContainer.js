import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    if (isNaN(+id)) return push("/");
    let result = null;
    try {
      if (isMovie) ({ data: result } = await moviesApi.movieDetail(+id));
      else ({ data: result } = await tvApi.showDetail(+id));
    } catch {
      this.setState({
        error: "Can't find anything.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}