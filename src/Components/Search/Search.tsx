import './style.css';
import React from 'react';
import { SearchProps, SearchState } from '../../type/type';
import { getLocalStorages, setLocalStorages } from '../Storeg/Storeg';

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  componentDidMount(): void {
    const search: string = getLocalStorages('search');
    if (search) {
      this.props.onClick(search);
      this.setState({ inputValue: search });
    }
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
    setLocalStorages('search', event.target.value);
  };
  handleClickSearch = () => this.props.onClick(this.state.inputValue);

  render() {
    return (
      <div className="search">
        <div>
          <input
            defaultValue={this.state.inputValue}
            onChange={this.handleInputChange}
            type="text"
          />
          <button type="button" onClick={this.handleClickSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
