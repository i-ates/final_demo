package com.hf.eclub.controller;

import com.hf.eclub.repository.UserRepository;
import com.hf.eclub.modal.User;
import com.hf.eclub.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class UserController {
    @Autowired
    UserService userService;

    private static final Logger log= LoggerFactory.getLogger(UserController.class);

    @PostMapping("/users")
    public void createUser(@RequestBody User user){
        userService.save(user);
    }


}