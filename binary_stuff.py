class binary:
    def byte_is_binary(string):
        if len(string) != 8:
            return False
        # my wierd and wonderful way of checking if it's made of 1's and 0's;
        # there's def a more efficient way of doing this but ¯\_(ツ)_/¯
        new_string = string.replace("1", "")
        new_string = new_string.replace("0", "")
        if len(new_string) > 0:
            return False
        else:
            return True

    def byte_to_decimal(string):
        if binary.byte_is_binary(string) == True:
            power = 2**7
            count = 0
            for i in list(string):
                if i == "1":
                    count += power
                power = power / 2
            return int(count)
        else:
            return "you're a silly bugger"
    
    def decimal_to_byte(num):
        if num > 255:
            return "you're a silly bugger"
        byte = []
        running_count = num
        power = 2**7
        for i in range(8):
            if running_count >= power:
                byte.append("1")
                running_count -= power
            else:
                byte.append("0")
            power = power / 2
        return "".join(byte)

# It ain't much but a commit a day keeps the job rejection away :/