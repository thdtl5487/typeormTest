import { AppDataSource } from "./data-source"
import { Userlist } from "./entity/userlist"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new userasfsdfasfd into the database...")
    // const user = new Userlist()
    // user.username = "serverTs"
    // user.userid = "ServerTs"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.userid)

    // console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Userlist)
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express / fastify / any other framework.")

    const userRepository = AppDataSource.getRepository(Userlist);

    const getUserList = await userRepository.find();
    console.log("find userList with Repository", getUserList);

    const firstUser = await userRepository.findOneBy({
        usernum: 1,
    })

    console.log("find first User : ", firstUser);

    const searchUserByName = await userRepository.findBy({
        username: 'serverTs'
    })

    console.log('find user by name', searchUserByName);


    const updateUserTarget = await userRepository.findOneBy({
        usernum : 3
    })

    updateUserTarget.username = 'updateName';

    await userRepository.save(updateUserTarget);

    const updatedList = await userRepository.find();
    console.log("updated User List : ", updatedList);

    await userRepository.update({
        usernum:5
    }, {
        username:'partial Update',
        userid:'patch update'
    });
    const patchUpdatedList = await userRepository.find();
    console.log("updated User List : ", patchUpdatedList);


    // const userToRemove = await userRepository.findOneBy({
    //     usernum: 5
    // })

    // await userRepository.remove(userToRemove);

    // const removedList = await userRepository.find();
    // console.log('removed List : ',removedList);

    await userRepository.delete({usernum: 17});
    const removedList = await userRepository.find();
    console.log('removed List : ',removedList);


}).catch(error => console.log(error))
