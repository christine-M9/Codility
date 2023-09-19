#function that takes a list of R
def solution(R):
    max_indicator = 0  # keeps track of max pothole
    pothole_depth = 0  # keeps depth of current pothole
    pothole_count = 0  # keeps count of consecutive potholes

# a loop that iterates through R elements
    for r in R:
        if r == 0: #if the current seg is smooth , calculate current pothole (p.d * p.c ) & update max indicator if its larger.
            max_indicator = max(max_indicator, pothole_depth * pothole_count)
            pothole_depth = 0
            pothole_count = 0

# if current seg has a pothole, update p.d to be max of current depth.
# increment p.c to account for the consecutive potholes.            
        else:
            pothole_depth = max(pothole_depth, r)
            pothole_count += 1
            
# ensure any remaining pothole is handled & return the maximum indicator.
    max_indicator = max(max_indicator, pothole_depth * pothole_count)

    return max_indicator


print(solution([0, 2, 1, 1, 0, 4, 1])) 
print(solution([1, 4, 1, 0, 5, 2, 3, 0, 8]))  
print(solution([9, 8, 7, 0, 0, 0, 2, 3, 6, 4])) 
print(solution([0, 0, 0])) 

