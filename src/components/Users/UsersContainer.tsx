import {useDispatch} from "react-redux";
import {follow, getUsersTC, unfollow} from "../../redux/users-reducer";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {useAppSelector} from "../common/hook/selectorHook";
import {
    selectCurrentPage,
    selectFollowingInProgress, selectIsFetching, selectPageSize, selectTotalUsersCount,
    selectUser
} from "../../redux/selectors/userSelector/usersSelectors";


export const UsersAPIComponent = () => {
    const dispatch = useDispatch()

    const users =useAppSelector(selectUser)
    const pageSize=useAppSelector(selectPageSize)
    const isFetching=useAppSelector(selectIsFetching)
    const totalUsersCount=useAppSelector(selectTotalUsersCount)
    const currentPage =useAppSelector(selectCurrentPage)
    const followingInProgress =useAppSelector(selectFollowingInProgress)

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    }

    return <div>
            {isFetching && <Preloader/>}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   users={users}
                   unfollow={unfollow}
                   follow={follow}
                   followingInProgress={followingInProgress}
            />
    </div>
}
