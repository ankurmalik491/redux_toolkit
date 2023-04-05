import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieList} from '../redux/apiServices/movieListService';
import renderItem from '../components/renderMovieItem';
import renderFooter from '../components/renderFooter';
import {appColors, appStrings} from '../theme/constants';
import styles from './styles';

const FetchList = () => {
  const dispatch = useDispatch();

  const {list, isError} = useSelector(state => state.movieListReducer);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    if (list) {
      setLoading(false);
      setLoadMore(false);
    } else {
      getMovieList();
    }
    return () => null;
  }, [list]);

  const getMovieList = () => {
    dispatch(
      fetchMovieList({
        page,
      }),
    );
  };

  const handleMore = () => {
    setLoadMore(true);
    //api giving error when giving page more than 500
    if (page < 500) {
      dispatch(fetchMovieList({page: page + 1}));
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator
            size={appStrings.large}
            color={appColors.primary.black}
          />
        </View>
      ) : isError ? (
        <View style={styles.container}>
          <Text style={styles.errorText}>{appStrings.errorText}</Text>
          <TouchableOpacity onPress={getMovieList} style={styles.button}>
            <Text style={styles.buttonText}>{appStrings.tryAgain}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={props => renderItem(props)}
          keyExtractor={item => item.id}
          onEndReached={handleMore}
          onEndReachedThreshold={0.3}
          disableVirtualization={true}
          legacyImplementation={true}
          ListFooterComponent={() => (loadMore ? renderFooter() : null)}
        />
      )}
    </View>
  );
};

export default FetchList;
