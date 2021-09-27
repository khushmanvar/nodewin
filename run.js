const {
    getStates,
    getListofDistricts,
    findByPin,
    findByDistrict,
    calendarByPin,
    calendarByDistrict
} = require('./nodewin')

async function runNodewin() { /* asynchronous */

    const allstates = await getStates()
    console.log(allstates)

    const alldistricts = await getListofDistricts(36) /* { state_id } */
    console.log(alldistricts)

    const calenderbypin = await calendarByPin(360005, '13-05-2021') /* { pincode, date } */
    console.log(calenderbypin)

    const calenderbydistrict = await calendarByDistrict(713, '13-05-2021') /* district_id, date */
    console.log(calenderbydistrict)

    const findbypin = await findByPin(360005, '13-05-2021') /* { pincode, date } */
    console.log(findbypin)

    const findbydistrict = await findByDistrict(713, '13-05-2021') /* district_id, date */
    console.log(findbydistrict)

}

runNodewin();