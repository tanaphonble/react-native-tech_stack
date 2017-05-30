import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, Text, Platform, UIManager } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                console.log('from rowhaschanged r1', r1, 'r2', r2)
                return r1 !== r2
            }
        })

        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library) {
        console.log('library', library)
        return <ListItem library={library} />
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = ({ libraries }) => {
    return {
        libraries: libraries
    }
}

export default connect(mapStateToProps)(LibraryList)