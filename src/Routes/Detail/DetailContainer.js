import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }

    async componentDidMount() {
        const { match: { params: { id } }, history: { push } } = this.props;
        const parseIntId = parseInt(id);
        const { isMovie } = this.state;
        if (isNaN(parseIntId)) {
            push("/");
        }
        let result = null;
        try {

            if (isMovie) {
                ({ data: result } = await moviesApi.movieDetail(parseIntId))
            } else {
                ({ data: result } = await tvApi.showDetail(parseIntId))
            }
            console.log(result)
        } catch{
            this.setState({
                error: "Can't not find result"
            })
        } finally {
            this.setState({
                loading: false, result
            })
        }


    }

    render() {
        console.log(this.props)
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={loading} />
        )

    }
}