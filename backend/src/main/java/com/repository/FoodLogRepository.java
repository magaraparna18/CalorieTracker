package com.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.FoodLog;

public interface FoodLogRepository extends JpaRepository<FoodLog, Long> {
	List<FoodLog> findByDate(LocalDate date);
}
