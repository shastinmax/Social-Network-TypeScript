import {useDispatch} from "react-redux";
import {follow, getUsersTC, unfollow} from "../../redux/users-reducer";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {selectUser} from "../../redux/selectors/users-selectors";
import {useAppSelector} from "../common/hook/selectorHook";


export const UsersAPIComponent =()=> {
    const dispatch = useDispatch()
    const {currentPage, pageSize,isFetching,totalUsersCount,users,followingInProgress} = useAppSelector(selectUser)
    useEffect(()=>{
        dispatch(getUsersTC(currentPage, pageSize))
    },[])

   const onPageChanged = (pageNumber: number) => {
       dispatch(getUsersTC(pageNumber, pageSize))
    }

        return <div>
            <>
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
            </>
        </div>
    // }
}
//
// export const mapStateToProps = (state: AppStateType): MapStateToProps => {
//     return {
//         users: getUsers(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//     }
// }
//
// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPageAC,
//     toggleIsFollowingInProgressAC,
//     getUsersTC
// })(UsersAPIComponent)