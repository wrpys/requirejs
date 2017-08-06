package com.wrpys.ssm.controller;

import com.wrpys.ssm.common.Constans;
import com.wrpys.ssm.common.PageInfo;
import com.wrpys.ssm.common.ResultBean;
import com.wrpys.ssm.model.User;
import com.wrpys.ssm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author wrp
 * @Description com.wrpys.ssm.controller.UserCtr
 * @Date 2017/1/13
 */
@Controller
@RequestMapping(value = "user")
public class UserCtr {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "list", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public PageInfo findUser(PageInfo pageInfo, User user) {
        userService.findUser(pageInfo, user);
        return pageInfo;
    }

    @RequestMapping(value = "add", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public ResultBean add(User user) {
        ResultBean rb = new ResultBean();
        userService.createUser(user);
        rb.setFlag(Constans.SUCCESS);
        return rb;
    }

    @RequestMapping(value = "delete", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public ResultBean delete(User user) {
        ResultBean rb = new ResultBean();
        userService.deleteUser(user);
        rb.setFlag(Constans.SUCCESS);
        return rb;
    }

    @RequestMapping(value = "batchDeleteUser", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public ResultBean batchDeleteUser(@RequestParam(value = "userIds") List<Integer> userIds) {
        ResultBean rb = new ResultBean();
        userService.batchDeleteUser(userIds);
        rb.setFlag(Constans.SUCCESS);
        return rb;
    }

    @RequestMapping(value = "update", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public ResultBean update(User user) {
        ResultBean rb = new ResultBean();
        userService.updateUser(user);
        rb.setFlag(Constans.SUCCESS);
        return rb;
    }

}
