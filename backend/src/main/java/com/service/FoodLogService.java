package com.service;

import com.model.FoodLog;
import com.repository.FoodLogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class FoodLogService {

    @Autowired
    private FoodLogRepository foodRepository;

    public boolean saveFoodEntry(FoodLog foodEntry) {
        try {
            foodRepository.save(foodEntry);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

