require 'Prime'

def smallest_multiple(of_n)
  #   Take all the primes in the list.
  #   For all the primes, pi, find the largest mi such that pmii≤n.
  #   Multiply all these powers of primes together.
  smallest_multiple = 1;

  find_multipliers(of_n).each { |multiplier| smallest_multiple *= multiplier }

  smallest_multiple
end

def find_multipliers(of_n)
  prime_array = []
  Prime.each(of_n) do |prime|
    power = 1 

    while prime**(m+1) <= of_n
      power += 1
    end

    prime_array << prime**power
  end

  prime_array
end

