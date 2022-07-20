-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,
    "winner" INTEGER NOT NULL,
    "looser" INTEGER NOT NULL,
    "winners_points" INTEGER NOT NULL,
    "loosers_points" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;
