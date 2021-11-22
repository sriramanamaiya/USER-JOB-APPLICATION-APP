export const filteredData = ( btnName, userData) => {
    const filterDeveloper = userData.filter((user) => {
        return user.jobTitle === btnName
    })
    return filterDeveloper
}

export const updateData = (data, appliedJob) => {
    const result = appliedJob.map((user) => {
        if( user._id === data._id ){
            return { ...user, ...data }
        }else {
            return { ...user }
        }
    })
    return result
}