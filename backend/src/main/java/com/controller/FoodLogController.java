package com.controller;

import com.model.FoodLog;
import com.service.FoodLogService;

import org.springframework.web.bind.annotation.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/api/food")
public class FoodLogController {

    @Autowired
    private FoodLogService foodService;

    @PostMapping("/add")
    public ResponseEntity<String> addFood(@RequestBody FoodLog foodEntry) {
        boolean isSaved = foodService.saveFoodEntry(foodEntry);
        if (isSaved) {
            return ResponseEntity.ok("Food entry added successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add food entry.");
        }
    }
}
