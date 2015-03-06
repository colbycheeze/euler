#=> largest_palindrome(3) returns 906609
def largest_palindrome(n)
  min_range, max_range = calculate_range(n)
  max = 0

  max_range.downto(min_range) do |i|
    i.downto(min_range) do |x|
      result = i * x

      if palindrome?(result)
        max = ( result > max ? result : max )
        break;
      end
    end
  end

  puts max 

end

def calculate_range(n)
  max_range = ""
  min_range = ""

  n.times do
    min_range << "0"
    max_range << "9"
  end

  min_range[0] = "1"
  return min_range.to_i, max_range.to_i
end

def palindrome?(number)
  number.to_s == number.to_s.reverse
end
