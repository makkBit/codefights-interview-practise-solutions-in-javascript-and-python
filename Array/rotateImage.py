# You are given an n x n 2D matrix that represents an image.
# Rotate the image by 90 degrees(clockwise).

def rotateImage(a):
   resultA = []
   for i in range(len(a)):
      row = []
      for j in range(len(a) - 1, -1, -1):
         row.append(a[j][i])
      resultA.append(row)
   return (resultA)


print rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
