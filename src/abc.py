t = int(input())
for _ in range(t):

    g = int(input())
    ans = []
    k = g//2
    while k > 0:
        sum = 0
        i = k
        while sum < g:
            sum += i
            i += 1
        if sum == g:
            ans.append(k)
        k -= 1
    ans.append(g)
    print("Case #{}: {}".format((_+1), len(ans)))
