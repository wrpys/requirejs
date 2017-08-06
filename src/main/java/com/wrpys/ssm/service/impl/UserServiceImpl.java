package com.wrpys.ssm.service.impl;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.wrpys.ssm.common.PageInfo;
import com.wrpys.ssm.dao.UserDao;
import com.wrpys.ssm.model.User;
import com.wrpys.ssm.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author wrp
 * @Description com.wrpys.ssm.service.impl.UserServiceImpl
 * @Date 2017/1/13
 */
@Service
public class UserServiceImpl implements UserService {

    Log logger = LogFactory.getLog(UserServiceImpl.class);

    @Autowired
    private UserDao userDao;

    @Override
    public void findUser(PageInfo pageInfo, User user) {
        logger.info("findUser pageInfo:"+ JSON.toJSONString(pageInfo));
        Page<?> page = PageHelper.startPage(pageInfo.getPageNumber(), pageInfo.getPageSize());
        pageInfo.setRows(userDao.findUserByParams(user));
        pageInfo.setTotal(page.getTotal());
    }

    @Override
    public void createUser(User user) {
        userDao.createUser(user);
    }

    @Override
    public void deleteUser(User user) {
        userDao.deleteUser(user);
    }

    @Override
    public void batchDeleteUser(List<Integer> userIds) {
        userDao.batchDeleteUser(userIds);
    }

    @Override
    public void updateUser(User user) {
        userDao.updateUser(user);
    }

}
