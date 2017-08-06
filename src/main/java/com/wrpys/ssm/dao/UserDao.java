package com.wrpys.ssm.dao;

import com.wrpys.ssm.model.User;

import java.util.List;

/**
 * @author wrp
 * @Description com.wrpys.ssm.dao.UserDao
 * @Date 2017/1/13
 */
public interface UserDao {

    List<User> findUserByParams(User user);

    void createUser(User user);

    void deleteUser(User user);

    void batchDeleteUser(List<Integer> userIds);

    void updateUser(User user);

}
